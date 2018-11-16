let s:cpo_save=&cpo
set cpo&vim
imap <S-Tab> 
map  
smap 	 <Plug>Minisnip
map <NL> <NL>
map  
map  
tnoremap  :b#
tnoremap  
vmap [% [%m'gv``
vmap \y "*y
map \tt :tabnew
vmap ]% ]%m'gv``
vmap a% [%v]%
vmap gx <Plug>NetrwBrowseXVis
nmap gx <Plug>NetrwBrowseX
nmap gcu <Plug>Commentary<Plug>Commentary
nmap gcc <Plug>CommentaryLine
omap gc <Plug>Commentary
nmap gc <Plug>Commentary
xmap gc <Plug>Commentary
nnoremap j gj
nnoremap k gk
vnoremap <silent> <Plug>NetrwBrowseXVis :call netrw#BrowseXVis()
nnoremap <silent> <Plug>NetrwBrowseX :call netrw#BrowseX(expand((exists("g:netrw_gx")? g:netrw_gx : '<cfile>')),netrw#CheckIfRemote())
nmap <silent> <Plug>CommentaryUndo :echoerr "Change your <Plug>CommentaryUndo map to <Plug>Commentary<Plug>Commentary"
nmap <BS> 
imap 	 <Plug>Minisnip
let &cpo=s:cpo_save
unlet s:cpo_save
set background=dark
set expandtab
set helplang=en
set nohlsearch
set ignorecase
set lazyredraw
set operatorfunc=<SNR>13_go
set path=/localhost/saratoga/amp/**
set runtimepath=~/.config/nvim,~/.vim/plugged/vim-minisnip/,~/.vim/plugged/vim-commentary/,~/.vim/plugged/vim-toml/,~/.vim/plugged/html5.vim/,/etc/xdg/nvim,~/.local/share/nvim/site,/usr/local/share/nvim/site,/usr/share/nvim/site,/usr/local/Cellar/neovim/0.3.1/share/nvim/runtime,/usr/share/nvim/site/after,/usr/local/share/nvim/site/after,~/.local/share/nvim/site/after,/etc/xdg/nvim/after,~/.vim/plugged/html5.vim/after,~/.config/nvim/after
set shiftwidth=2
set splitbelow
set splitright
set noswapfile
set tabstop=2
set viewdir=~/.vim/view
set wildignore=**/public/**
set window=42
set nowritebackup
" vim: set ft=vim :
