FROM python:3.9-alpine

ENV PATH="/scripts:${PATH}"

COPY ./requirements.txt requirements.txt
# necessary for uWSGI to run in alpine
RUN apk add --update --no-cache --virtual .tmp gcc libc-dev linux-headers
RUN pip install -r /requirements.txt
RUN apk del .tmp

RUN mkdir /rnlweb
COPY ./rnlweb /rnlweb
WORKDIR /rnlweb
COPY ./scripts /scripts

RUN chmod +x /scripts/*
RUN mkdir -p /vol/web/media
RUN mkdir -p /vol/web/static

# run production django with user with less previleges
RUN adduser -D user
RUN chown -R user:user /vol/
RUN chmod -R 755 /vol/web
USER user

CMD ["entrypoint.sh"]
