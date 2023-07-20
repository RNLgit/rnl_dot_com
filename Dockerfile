FROM python:3.9-alpine

COPY requirements.txt requirements.txt
RUN python3 -m pip install -r requirements.txt

RUN mkdir /app
COPY . /app
WORKDIR /app
COPY ./scripts /scripts
ENV PATH="/scripts:${PATH}"

RUN chmod +x /scripts/*
RUN mkdir -p /vol/web/media
RUN mkdir -p /vol/web/static

# run production django with user with less previleges
RUN adduser -D user
RUN chown -R user:user /vol/
RUN chmod 755 /vol/web
USER user

CMD ["entrypoint.sh"]
