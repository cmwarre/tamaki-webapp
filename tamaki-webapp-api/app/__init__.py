# -*- coding: utf-8 -*-
"""

"""

# Import flask and template operators
from flask import Flask
from flask_cors import CORS

# Define the WSGI application object
app = Flask(__name__)


@app.errorhandler(404)
@app.route('/')
def index(e=None):
    return 'hello world';


def register_blueprints():
    # Import api blueprints
    from api.v1.test import test_api

    app.register_blueprint(test_api, url_prefix="/api/v1/test")


# Configurations
app.config.from_object('config')
CORS(app)


register_blueprints()

