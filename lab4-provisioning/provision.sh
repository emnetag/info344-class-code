#!/usr/bin/env bash

# Provisioning script for the authentication challenge.
echo "Hello, world!"

# use noninteractive mode since this is automated
export DEBIAN_FRONTENG=noninteractive

# Suppress erroneous error messages
sudo -E rm -v /etc/apt/apt.conf.d/70debconf

# Update the package database
sudo -E apt-get update

# Install git
sudo -E apt-get install -y git

# Install Node.js v4.x
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo -E apt-get install -y nodejs

# Install build-essential for Node modules w/native code
sudo -E apt-get install -y build-essential

# allow Node.js servers to bind to low prots
sudo -E apt-get install -y chase
sudo -E apt-get install -y libcap2-bin
sudo -E setcap cap_net_bind_service=+ep $(chase $(which node))

# install MongoDB and tools
sudo -E apt-get adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse" | sudo -E tee /etc/apt/sources.list.d/mongodb-org-3.2.list
sudo -E apt-get update
sudo -E apt-get install -y mongodb-org

# Install the kerberos library
# which is needed to build the MongoDB
# Node.js driver during npm install
sudo -E apt-get install -y libkrb5-dev

# Install pm2 utility for managing node servers 
sudo -E npm install -g pm2 --loglevel --error

# install the tsd utility for installing
# Visual Studio Code typings files
# gives statement completion and parameter hinting
sudo -E npm install -g tsd --loglevel error
