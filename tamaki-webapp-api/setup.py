from setuptools import setup

setup(
    name='tamaki-webapp-api',
    description="RESTful API for Tamaki Webapp",
    author="Cody Warren",
    author_email="cody@tamaki.co.nz",
    url="www.api.tamakicontrol.com",
    version='1.0',
    license='UNLICENSED',
    install_requires=[
        'flask',
        'flask-cors'
    ]
)
