from django.shortcuts import render,redirect
from django.http import HttpResponse 
from django.urls import reverse
from google.cloud import firestore
from firebase_admin import firestore
import json
import firebase_admin
from firebase_admin import credentials
from django.http import JsonResponse

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