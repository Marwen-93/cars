# pull the official base image
FROM python:3.8.3-alpine
# set work directory
WORKDIR /APITEST

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV MONGO_DB_USERNAME=marwen\
    MONGO_DB_PWD=11061993

# # install dependencies
RUN  apk update \
    && apk add --virtual build-deps gcc python3-dev musl-dev \
    && apk add jpeg-dev zlib-dev libjpeg \
    && pip install --upgrade pip \
    && pip install Pillow \
    && apk del build-deps
  
RUN pip install pymongo[srv]
COPY requirements.txt  requirements.txt 
COPY . /backend/

RUN pip install -r requirements.txt

# # copy project
COPY . .
RUN python manage.py makemigrations
RUN python manage.py migrate
# EXPOSE 8000
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
