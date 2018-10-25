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


dev = DevelopmentConfig()
admin_user = User(1, 'admin', True, 'password')
attendant = User(2,'attendant', False, 'password')
token_expire_at = datetime.timedelta(minutes=75)

@app.route('/login', methods=["POST"])
def login():
    auth = request.get_json()
    username = auth.get("username")
    password = auth.get("password")

    if not username and not password:
        return jsonify({"message":"enter your credentials"}), 401

    access_token = create_access_token(identity=username)

    if username == admin_user.username and password == admin_user.password:
        is_admin = admin_user.is_admin        
        return jsonify({"message":"logged in as admin", "admin":is_admin, "access_token": access_token}), 200

    if username == admin_user.username and password != admin_user.password:
        return jsonify({"message":"Invalid username/password"}), 401

    # authenticate attendant
    if username == attendant.username and password == attendant.password:
        # create a token here
        is_attendant = attendant.is_admin
        return jsonify({"message":"logged in as attendant", "admin":is_attendant, "access_token": access_token}), 200

    if username == attendant.username and password != attendant.password:
        return jsonify({"message":"Invalid username/password"}), 401


if __name__ == '__main__':
    app.run(debug=True)