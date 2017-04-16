# coding:utf8
from flask import Flask
import config
from flask_sqlalchemy import SQLAlchemy

app = Flask('myself')
app.config.from_object(config)

db = SQLAlchemy(app)

