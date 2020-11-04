from django.urls import path, include



urlpatterns = [
    path('chats/', include('chats.urls')),
    path('envelopes/', include('envelopes.urls')),
    path('profile/', include('accounts.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
]
