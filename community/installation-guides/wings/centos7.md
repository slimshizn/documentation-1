# CentOS 7
This guide provides comprehensive instructions for installing Pterodactyl Wings v1.X on CentOS 7.

[[toc]]

## Install Dependencies

```bash
## Install yum tools
yum install -y yum-utils device-mapper-persistent-data lvm2

## Add the docker repo
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

## Install docker
yum install -y docker-ce docker-ce-cli

## Enable docker service
systemctl enable --now docker

# Configure firewall
firewall-cmd --add-port 8080/tcp --permanent
firewall-cmd --add-port 2022/tcp --permanent
firewall-cmd --permanent --zone=trusted --change-interface=docker0
firewall-cmd --zone=trusted --add-masquerade --permanent
firewall-cmd --reload
```

## Installing Wings
Great, now all of the dependencies and firewall rules have been dealt with. From here follow the [official Wings installation documentation](/wings/1.0/installing.html#enabling-swap).
