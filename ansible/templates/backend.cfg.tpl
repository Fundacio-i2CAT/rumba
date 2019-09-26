[logging]
level: DEBUG
format: "%(asctime)s %(name)16s %(levelname)8s %(message)8s"
folder: /var/rumba/logs/

[sessions]
directory: /var/rumba/sessions

[dasher]
directory: /home/seg/code/rumba/dasher-basic/code

[server]
server_url: https://{{ ansible_eth0.ipv4.address }}
