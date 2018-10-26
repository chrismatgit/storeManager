from flask import Flask, jsonify, request
import json
from models import Product, User, Sale
import datetime


products = Product()
user = User()
sales = Sale()
app = Flask(__name__)


@app.route('/api/v1/auth_signUp/', methods=['POST'])
def signUp():
    return jsonify(user.signUp()), 201

@app.route('/api/v1/auth_signUp/', methods=['GET'])
def get_users():
    return jsonify(user.get_users()), 200 
    
@app.route('/api/v1/products/', methods=['POST'])
def add_products():
    return jsonify(products.add_product()), 201
    
@app.route('/api/v1/products/', methods=['GET'])
def get_products():
    return jsonify(products.get_products()), 200 

@app.route('/api/v1/product/<product_id>', methods=['GET'])
def get_product(product_id):
    return jsonify(products.get_product(product_id)), 200 

@app.route('/api/v1/sales/', methods=['GET'])
def get_sales():
    return jsonify(sales.get_sales()), 200 



if __name__ == '__main__':
    app.run(debug=True)