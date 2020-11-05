from rest_framework import permissions
from rest_framework.exceptions import PermissionDenied

class MyCustomPermission(permissions.BasePermission):

     def has_object_permission(self, request, view, obj):

         if not obj.status == 'DFT' and request.method == 'DELETE':
             return False
         # else:
         #     raise PermissionDenied('request not permitted')

         elif obj.status == 'SMTD' and request.method == 'PUT' or request.method == 'PATCH':
             return False
         else:
             return True
