from django.shortcuts import render
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer
from .models import NewUser
import jwt, datetime

# Create your views here.
class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


#Login View
class LoginView(APIView):
    def post(self, request):
        email = request.data["email"]
        password = request.data["password"]

        user = NewUser.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed('User not found!')

        if user.password != password:
            raise AuthenticationFailed('Incorrect password!!!!!!')

        payload = {
            'id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
        }
        token = jwt.encode(payload, 'secret', algorithm='HS256').decode('utf-8')