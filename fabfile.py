#!/usr/bin/env python
from fabric.api import env,run,local,get,put,task,sudo
from fabric.contrib.files import exists

env.user='cwarren'
env.hosts=[
    'api.tamaki-control.com'
]

project = "tamaki-webapp"


def publish_api():
    local("tar -czvf build/%s-api.tar.gz %s-api" % (project, project))
    put("build/%s-api.tar.gz" % project)
    sudo("tar -zxvf %s-api.tar.gz -C /usr/share/" % project)

    if not exists("/lib/systemd/system/%s-api.service" % project):
        sudo("ln -s /usr/share/%s-api/%s-api.service /lib/systemd/system/%s-api.service" % (project, project, project))

    if not exists("/etc/nginx/sites-enabled/%s-api" % project):
        sudo("ln -s /usr/share/%s-api/%s-api.nginx.conf /etc/nginx/sites-enabled/%s-api" % (project, project, project))

    sudo("chown -R root:root /usr/share/%s-api" % project)
    sudo("chmod -R 755 /usr/share/%s-api" % project)

    sudo("systemctl restart %s-api.service" % project)
    sudo("systemctl restart nginx.service")


def publish_frontend():
    local("cd %s-frontend && yarn build" % project)
    local("tar -czvf build/%s-frontend.tar.gz %s-frontend/build %s-frontend/%s-frontend.nginx.conf" % (project, project, project, project))
    put("build/%s-frontend.tar.gz" % project)
    sudo("tar -zxvf %s-frontend.tar.gz -C /usr/share/" % project)

    if not exists("/etc/nginx/sites-enabled/%s-frontend" % project):
        sudo("ln -s /usr/share/%s-frontend/%s-frontend.nginx.conf /etc/nginx/sites-enabled/%s-frontend" % (project, project, project))

    sudo("chown -R root:root /usr/share/%s-frontend" % project)
    sudo("chmod -R 755 /usr/share/%s-frontend" % project)

    sudo("service nginx restart")


def publish_all():
    publish_api()
    publish_frontend()





