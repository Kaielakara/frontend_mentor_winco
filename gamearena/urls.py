from django.urls import path
from . import views

appname = "gamearena"

urlpatterns = [
    path("", views.index, name="index")
]