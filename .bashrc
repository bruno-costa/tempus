#===========================================
# Váriavies com as Cores
#===========================================
 
NONE="\[\033[0m\]" # Eliminar as Cores, deixar padrão)
 
## Cores de Fonte
K="\[\033[0;30m\]" # Black (Preto)
R="\[\033[0;31m\]" # Red (Vermelho)
G="\[\033[0;32m\]" # Green (Verde)
Y="\[\033[0;33m\]" # Yellow (Amarelo)
B="\[\033[0;34m\]" # Blue (Azul)
M="\[\033[0;35m\]" # Magenta (Vermelho Claro)
C="\[\033[0;36m\]" # Cyan (Ciano - Azul Claro)
W="\[\033[0;37m\]" # White (Branco)
 
## Efeito Negrito (bold) e cores
BK="\[\033[1;30m\]" # Bold+Black (Negrito+Preto)
BR="\[\033[1;31m\]" # Bold+Red (Negrito+Vermelho)
BG="\[\033[1;32m\]" # Bold+Green (Negrito+Verde)
BY="\[\033[1;33m\]" # Bold+Yellow (Negrito+Amarelo)
BB="\[\033[1;34m\]" # Bold+Blue (Negrito+Azul)
BM="\[\033[1;35m\]" # Bold+Magenta (Negrito+Vermelho Claro)
BC="\[\033[1;36m\]" # Bold+Cyan (Negrito+Ciano - Azul Claro)
BW="\[\033[1;37m\]" # Bold+White (Negrito+Branco)
BRUNO="\[\033[1;37m\]"
 
## Cores de fundo (backgroud)
BGK="\[\033[40m\]" # Black (Preto)
BGR="\[\033[41m\]" # Red (Vermelho)
BGG="\[\033[42m\]" # Green (Verde)
BGY="\[\033[43m\]" # Yellow (Amarelo)
BGB="\[\033[44m\]" # Blue (Azul)
BGM="\[\033[45m\]" # Magenta (Vermelho Claro)
BGC="\[\033[46m\]" # Cyan (Ciano - Azul Claro)
BGW="\[\033[47m\]" # White (Branco)
 
 
#=============================================
# Colorindo o Terminal
#=============================================
 
# Alias para colorir as saidas no terminal
if [ -x /usr/bin/dircolors ]; then
    test -r ~/.dircolors && eval "$(dircolors -b ~/.dircolors)" || eval "$(dircolors -b)"
 
    ## Aliases (apelidos) para comandos
    alias ls='ls --color=auto'
    alias dir='dir --color=auto'
    alias grep='grep --color=auto'
    alias fgrep='fgrep --color=auto'
    alias egrep='egrep --color=auto'
fi # Fim do if do dircolor
 
# Mostra um '*' no branch que nao teve commit feito
GIT_PS1_SHOWDIRTYSTATE=true
 
export PS1="$BY┌[$BG\u$M@${HOSTNAME%%.*}$BY] $BB\w $BY\$(__git_ps1 "{%s}")\n$BY└> \\$ $NONE"
 
 
 
#=============================================
# Configurações gerais (Aliases e Outros)
#=============================================
 
# Ativando auto-completar no git
source /etc/bash_completion.d/git-prompt
 
 
# Ativando o auto-completar do sudo
#complete -cf sudo
 
# Alias para os comandos
alias mp3-dl='youtube-dl --output "%(title)s.%(ext)s" --extract-audio --audio-format=mp3' # Fazer download de mp3 do youtube
 
alias update-system='sudo apt-get update && sudo apt-get dist-upgrade -y' # Atualizar o sistema
 
alias ll='ls -la'
 
alias gitl='git log --pretty=oneline'
alias gitll='git log --graph --pretty=format:"%C(yellow)%H%Creset %C(bold)%C(green)%d%Creset%nPor: %C(bold)%an%Creset Em: %C(bold)%ar%Creset [%ad]%n%s%n"'
 
alias gits='git status'

# #### #### #### do .bashrc original #### #### #### #

# enable programmable completion features (you don't need to enable
# this, if it's already enabled in /etc/bash.bashrc and /etc/profile
# sources /etc/bash.bashrc).
if ! shopt -oq posix; then
  if [ -f /usr/share/bash-completion/bash_completion ]; then
    . /usr/share/bash-completion/bash_completion
  elif [ -f /etc/bash_completion ]; then
    . /etc/bash_completion
  fi
fi

#--------LARAVEL--------#
alias artisan='php artisan'
#--------GULP--------#
alias gw='gulp watch'

#-------IMPRIME O SIMBULO DA DIST-------#
#if [ -f /usr/bin/screenfetch ]; then screenfetch; fi
