from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    
    name = models.CharField(max_length=20)
    dob = models.DateField(null=True, blank=True)
    email = models.EmailField(unique=True)
    grade_level = models.CharField(max_length=15)
    picture = models.ImageField(upload_to='profile_pics/', null=True, blank=True)
    bio = models.TextField(blank=True)
    
    def __str__(self):
        return self.user.username
    