from django.shortcuts import render,redirect
from django.http import HttpResponse 

from google.cloud import firestore
from firebase_admin import firestore

import firebase_admin
from firebase_admin import credentials


from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
import os

from openpyxl import Workbook


if not firebase_admin._apps:
    cred = credentials.Certificate('E:/Django/chitbidTask/serviceAccountKey.json')
    firebase_admin.initialize_app(cred)

    db = firestore.client() 



# To create user details 
def create_document(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        dob = request.POST.get('dob')
        email = request.POST.get('email')
        gender = request.POST.get('gender')
        phone_no = request.POST.get('phone_no')
        organization = request.POST.get('organization')
        language = request.POST.get('language')
        agent = request.POST.get('agent')
        profile = request.POST.get('profile')
        email_verified = request.POST.get('email_verified')
        uid = request.POST.get('uid')
        url = request.POST.get('url')
        

        db = firestore.Client()
        doc_ref = db.collection('users').document(phone_no)
        doc_ref.set({
            'name': name,
            'dob': dob,
            'email':email,
            'gender':gender,
            'phone_no':phone_no,
            'organization':organization,
            'language':language,
            'agent':agent,
            'profile':profile,
            'email_verified':email_verified,
            'uid':uid,
            'url':url,
        }) 

        return redirect('read_documents')
        
    return render(request, 'create.html')

# To create user details...


# To read user details
def read_documents(request):
    db = firestore.Client()
    docs = db.collection('users').get()
    
    users = []
    for doc in docs:
        user = doc.to_dict()
        user['id'] = doc.id
        users.append(user)
    return render(request, 'read.html', {'users': users})

# To read user details...


# To update user details
def update_document(request, document_id):
    db = firestore.Client()
    doc_ref = db.collection('users').document(document_id)
    user = doc_ref.get().to_dict()
    
    if request.method == 'POST':
        name = request.POST.get('name')
        dob = request.POST.get('dob')
        email = request.POST.get('email')
        gender = request.POST.get('gender')
        phone_no = request.POST.get('phone_no')
        organization = request.POST.get('organization')
        language = request.POST.get('language')
        agent = request.POST.get('agent')
        profile = request.POST.get('profile')
        email_verified = request.POST.get('email_verified')
        uid = request.POST.get('uid')
        url = request.POST.get('url')
        
        doc_ref.update({
            'name': name,
            'dob': dob,
            'email':email,
            'gender':gender,
            'phone_no':phone_no,
            'organization':organization,
            'language':language,
            'agent':agent,
            'profile':profile,
            'email_verified':email_verified,
            'uid':uid,
            'url':url,
        })
        
        return redirect('read_documents')
    
    return render(request, 'update.html', {'document_id': document_id, 'user':user}) 

# To update user details...


# To delete user details
def delete_document(request, document_id):
    db = firestore.Client()
    doc_ref = db.collection('users').document(document_id)
    doc_ref.delete()
    
    return redirect('read_documents')

# To delete user details...


# Login...
def login(request):
    error_message = None 


    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        
        # Initialize Firestore database
        db = firestore.Client()
        
        # Retrieve the user document from the 'users' collection
        user_doc = db.collection('login').document(username).get()
        
        if user_doc.exists and user_doc.get('password') == password:
            # User authenticated, perform additional actions or redirect to a success page
            return redirect('home')
        else:
            # User authentication failed, display an error message or redirect to a failure page
            error_message = 'Invalid username or password'
          
    
    return render(request, 'login.html',{'error_message':error_message})
# Login...


# Home page...
def home_page(request):
    return render(request, 'dashboard.html')
# Home page...


# For pdf download...
def generate_pdf(document_id):
    print( document_id,  "Generating PDF...")
    db = firestore.Client()
    doc_ref = db.collection('users').document(document_id)
    users = doc_ref.get()
    
    print(users,5456)
   
    if users.exists:
        data = users.to_dict()
        pdf_filename = 'data.pdf'
        pdf_path = os.path.abspath(pdf_filename)
        print("PDF file path:", pdf_path)
        # Generate PDF
      
        c = canvas.Canvas(pdf_filename, pagesize=letter)
        
        # Write data to PDF
        c.drawString(100, 700, f"Name: {data.get('name')}")
        c.drawString(100, 680, f"Date Of Birth: {data.get('dob')}")
        c.drawString(100, 660, f"E-mail: {data.get('email')}")
        c.drawString(100, 640, f"Gender: {data.get('gender')}")
        c.drawString(100, 620, f"Phone_no: {data.get('phone_no')}")
        c.drawString(100, 600, f"Organization: {data.get('organization')}")
        c.drawString(100, 580, f"Language: {data.get('language')}")
        c.drawString(100, 560, f"Agent: {data.get('agent')}")
        c.drawString(100, 540, f"Profile: {data.get('profile')}")
        c.drawString(100, 520, f"E-mail Verified: {data.get('email_verified')}")
        c.drawString(100, 500, f"Uid: {data.get('uid')}")
        c.drawString(100, 480, f"Url: {data.get('url')}")
       
        # Add more fields as necessary
        
        c.save()
        
        return pdf_filename
    
    return None



def download_pdf(request, document_id):
    pdf_filename = generate_pdf(document_id)

    if pdf_filename:
        try:
            with open(pdf_filename, 'rb') as file:
                response = HttpResponse(file.read(), content_type='application/pdf')
                response['Content-Disposition'] = 'attachment; filename=' + os.path.basename(pdf_filename)
                print("Response content size:", len(response.content))  # Add this line
                return response
        except FileNotFoundError:
            return HttpResponse("PDF file not found.")
        except Exception as e:
            return HttpResponse("Error generating PDF: " + str(e))

    return HttpResponse("PDF generation failed.") 

# For pdf download...

# For Excel Sheet Download...

def download_excel(request, document_id):
    # Fetch data from Firestore or any other source
    print(document_id, 456464)
    db = firestore.Client()
    doc_ref = db.collection('users').document(document_id)
    user_doc = doc_ref.get()
    user_data = user_doc.to_dict()

    # Create a new workbook
    workbook = Workbook()

    # Create a new sheet in the workbook
    sheet = workbook.active

    # Add header row
    headers = ['Name', 'Date Of Birth', 'Email', 'Gender', 'Phone_no', 'Organization', 'Language', 'Agent', 'Profile', 'Email_verified','Uid','Url']  # Add more fields as per your Firestore document structure
    sheet.append(headers)

    # Add data row
    row_data = [user_data['name'], user_data['dob'], user_data['email'], user_data['gender'], user_data['phone_no'], user_data['organization'], user_data['language'], user_data['agent'], user_data['profile'], user_data['email_verified'], user_data['uid'], user_data['url']]  # Add more fields as per your Firestore document structure
    sheet.append(row_data)

    # Set the response headers for downloading the file
    response = HttpResponse(content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    response['Content-Disposition'] = 'attachment; filename=table_data.xlsx'

    # Save the workbook to the response
    workbook.save(response)

    return response

# For Excel Sheet Download...