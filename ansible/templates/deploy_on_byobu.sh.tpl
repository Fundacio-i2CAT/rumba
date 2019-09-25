#!/usr/bin/env bash

byobu new-session -d -s $USER

byobu rename-window -t $USER:0 'BACKEND'
byobu send-keys "cd {{ rumba_src_folder }}/rumba/backend && source venv/bin/activate && python api/api_controller.py" C-m

byobu new-window -t $USER:1 -n 'FRONTEND'
byobu send-keys "cd {{ rumba_src_folder }}/rumba/rumba-front && source ~/.nvm/nvm.sh && ng serve" C-m

byobu new-window -t $USER:2 -n 'JANUS'
byobu send-keys "{{ janus_dir }}/bin/janus" C-m
