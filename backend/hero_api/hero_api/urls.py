from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from heros import views

# router = routers.DefaultRouter()
# # router.register(r'list_hero', views.ListHero, 'list')
# router.register(r'detail_hero', views.DetailHero, 'detail')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('heros.urls')),
    # path('', include(router.urls)),
]
