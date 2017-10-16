# -*- coding: utf-8 -*-
"""
    Example API
"""

from flask import Blueprint, jsonify

test_api = Blueprint('tests', __name__)


@test_api.route("/")
def index():
    return jsonify({"message": "Hello World!"})
