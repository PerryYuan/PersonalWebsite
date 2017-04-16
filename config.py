# coding:utf8

import os

SECRET_KEY = os.urandom(24)

SQLALCHEMY_DATABASE_URI = 'mysql+mysqldb://root:root@127.0.0.1:3306/myself?charset=utf8'

SQLALCHEMY_TRACK_MODIFICATIONS = False