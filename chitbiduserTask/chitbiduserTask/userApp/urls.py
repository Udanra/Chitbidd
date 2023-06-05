from django.urls import path
from . import views

# URL Path
urlpatterns = [
    path('create/', views.create_document, name='create_document'),
    path('read/', views.read_documents, name='read_documents'),
    path('update/<str:document_id>/', views.update_document, name='update_document'),
    path('delete/<str:document_id>/', views.delete_document, name='delete_document'),
    path('', views.login, name='login'),
    path('home/', views.home_page, name='home'),
    path('download/<str:document_id>/', views.download_pdf, name='download_pdf'),
    path('download-excel/<str:document_id>/', views.download_excel, name='download_excel'),
    path('bid_status/', views.bids, name='bid_status'),
    path('download_bid_pdf/<str:document_id>/', views.download_bid_pdf, name='download_bid_pdf'),
    path('download_bid_excel/<str:document_id>/', views.download_bid_excel, name='download_bid_excel'),
]
