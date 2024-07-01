from django.urls import path
from .views import login, RegisterView, LogoutView, BookCreateView, BookListView, BookDetailView

urlpatterns = [
    path('login/', login, name='login'),
    path('register/', RegisterView.as_view(), name='register'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('books/add/', BookCreateView.as_view(), name='add_book'),
    path('books/', BookListView.as_view(), name='list_books'),
    path('books/<int:pk>/', BookDetailView.as_view(), name='book_detail'),
]
