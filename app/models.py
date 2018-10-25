from flask import request

class Product(object):
    """ stores all the products in the store """
    def __init__(self):
        self.store = []

    def add_product(self):
        """ adds products to the store comment"""
        products = {
                "product_id": len(self.store)+1,
                "product_name" : request.json["product_name"],
                "quantity" : request.json ["quantity"],
                "unit_cost" : request.json ["unit_cost"],
                "category" : request.json ["category"]
            }
        self.store.append(products)
        return self.store
        
    def get_products(self):
        """ no products have been added comment"""
        if len(self.store) == 0:
            mess = "empty"
            return mess
        else:
            return self.store

    def get_product(self, product_id):
        """ returns a single product based off the supplied id """
        return self.store[int(product_id)-1]



class User(object):
    """ stores all the products in the store """
    def __init__(self):
        self.account = []

    def signUp(self):
        """ adds products to the store """
        accounts = {
                "user_id": len(self.account)+1,
                "user_name" : request.json["user_name"],
                "email" : request.json ["email"],
                "password" : request.json["password"],
                "admin_status" : True
            }
        self.account.append(accounts)
        return {"message":"account created"}

    def get_users(self):
        """ no products have been added"""
        if len(self.account) == 0:
            mess = "empty"
            return mess
        else:
            return self.account

    
    def give_admin_right(self, user_id):
        """ This gives admin rights to a user """
        for user in self.account:
            if user_id == user["user_id"]:
                user["admin"] = True
                return user
    
class Sale:
    """ stores all the sales made in the store """
    def __init__(self):
        self.sales = []
    
    def get_sales(self):
        if len(self.sales) == 0:
            mess = {"message":"No sales records yet"}
            return mess
        return self.sales


    
        
  

    