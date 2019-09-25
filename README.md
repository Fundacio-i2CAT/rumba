# RUMBA

Collective building platform for Musical Pedagogy. The objective of this software is allowing to record concerts using the mobile phone and share the videos throgh the network. Using the same application, editors are able to mount a final video using the videos recorded by the assistants.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

This software has been developed and tested in Ubuntu 14.04.

In order to install and deploy it, following software should be already installed in your system.

<ul>
    <li>Python3.4 or later</li>
    <li>Ansible (*tested with version 2.8.4*)</li>
    <li>Git</li>
</ul>

### Installing

1) Edit <b>variables.yml.example</b> file in ansible/vars folder and save it
as <b>variables.yml</b> to match your needs (please note
that `ubuntu_user` specified in this configuration file should have permision to create
new directories under `rumba_src_folder`):

<ul>
    <li>rumba_src_folder: Absolute path of the folder where the cloned code will reside.</li>
    <li>frontend_port: Port that the frontend will be listening</li>
    <li>backend_port: Port that the backend will be listening</li>
    <li>ffmpeg_version: Version of FFMPEG to download and install</li>
    <li>janus_dir: Absolute path to the folder where Janus will be installed.</li>
    <li>ubuntu_user: Username for ubuntu system</li>
    <li>bitbucket_user: Username in bitbucket.i2cat.net</li>
    <li>bitbucker_pass: Password in bitbucket.i2cat.net</li>
</ul>

2) On target host, execute:

```
sudo visudo
```

On the bottom of the file, add the following line replacing `<ubuntu_user>` by
`variables.yml` corresponding value:

```
<ubuntu_user> ALL=(ALL) NOPASSWD: ALL
```

3) Include yout target host ip address in `/etc/ansible/hosts`

4) Ensure target host has ssh service enabled.

5) Execute Ansible playbook for installing the software and its dependencies

```
$ ansible-playbook ansible/installation.yml --ask-become-pass
```

Please be patient, this command takes a while, since it needs to download, compile and/or install the software and all its dependencies.

### Deployment

In order to deploy the software, we provide two different methods: either deploy the software in a byobu session or deploy it as services managed by the  <a href="http://supervisord.org/" target="_blank">Supervisor</a> package.

<br>
#### Deployment as services of Supervisor

Execute the <b>supervisor_deployment.yml</b> playbook for installing the Supervisor service and deploy the software in it.

```
$ ansible-playbook ansible/supervisor_deployment.yml --ask-become-pass
```

Once it finishes, the state of the different Rumba components can be checked by executing the supervisorctl command.

```
$ sudo supervisorctl
```

#### Deploying on Byobu

Execute the <b>byobu_deployment.yml</b> playbook for installing <a href="http://byobu.co/" target="_blank">Byobu</a> and deploy the software in it:

```
$ ansible-playbook ansible/byobu_deployment.yml --ask-become-pass
```

In order to join to the byobu session, just execute the byobu command:

```
$ byobu
```

### LOGS

By default, backend logs are written in <b>/var/rumba/logs folder</b>, separated in different files
depending on the component. Regarding Janus, logs are located in <b>/var/log/janus/</b> folder.
