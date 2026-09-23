from django.db import models

# Create your models here.

class Student(models.Model):
    name = models.CharField(max_length =100)
    email = models.EmailField(unique =True)
    phone = models.CharField(max_length =15)   
    age =models.IntegerField()


    def __str__(self):
        return self.name

class Course(models.Model):
    name = models.CharField(max_length=100)
    duration = models.CharField(max_length=50)
    fee = models.DecimalField(max_digits=10 ,decimal_places=2)

    def __str__(self):
        return self.name

class Enrollment(models.Model):
    student = models.ForeignKey(
        Student, 
        on_delete=models.CASCADE
    )

    course = models.ForeignKey(
        Course ,
        on_delete = models.CASCADE
    )

    enrollment_date =models.DateField()

    def __str__(self):
        return f"{self.student.name}-{self.course.name}"