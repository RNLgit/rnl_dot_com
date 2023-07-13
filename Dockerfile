# syntax=docker/dockerfile:1
FROM python:3.9-alpine
RUN mkdir /www
WORKDIR /www
COPY requirements.txt requirements.txt
RUN python3 -m pip install -r requirements.txt
COPY . /www
WORKDIR /www/rnlweb
CMD ["python", "manage.py" , "runserver"]