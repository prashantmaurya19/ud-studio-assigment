let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/Documents/coding/Ud-Studios-Assignment/backend
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +21 src/index.js
badd +1 .pnp.cjs
badd +0 .env
badd +5 src/api/index.js
badd +8 src/api/user/index.js
badd +7 src/util/file/index.js
badd +5 src/api/auth/index.js
badd +11 src/api/auth/google/index.js
badd +17 src/oauth/google/index.js
badd +4 src/oauth/index.js
badd +8 src/util/route/index.js
badd +3 src/api/auth/github/index.js
badd +9 src/oauth/github/index.js
badd +35 ~/Documents/linux-dotfiles/nvim/.config/nvim/lua/plugins/telescope.lua
badd +127 ~/Documents/linux-dotfiles/nvim/.config/nvim/pm_user/lua/pm_user/remaps.lua
argglobal
%argdel
edit src/oauth/index.js
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 79 + 79) / 159)
exe 'vert 2resize ' . ((&columns * 79 + 79) / 159)
argglobal
setlocal foldmethod=manual
setlocal foldexpr=0
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldenable
silent! normal! zE
let &fdl = &fdl
let s:l = 4 - ((3 * winheight(0) + 19) / 38)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 4
normal! 0
lcd ~/Documents/coding/Ud-Studios-Assignment/backend
wincmd w
argglobal
if bufexists(fnamemodify("~/Documents/coding/Ud-Studios-Assignment/backend/src/oauth/github/index.js", ":p")) | buffer ~/Documents/coding/Ud-Studios-Assignment/backend/src/oauth/github/index.js | else | edit ~/Documents/coding/Ud-Studios-Assignment/backend/src/oauth/github/index.js | endif
if &buftype ==# 'terminal'
  silent file ~/Documents/coding/Ud-Studios-Assignment/backend/src/oauth/github/index.js
endif
balt ~/Documents/coding/Ud-Studios-Assignment/backend/src/api/auth/github/index.js
setlocal foldmethod=manual
setlocal foldexpr=0
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldenable
silent! normal! zE
let &fdl = &fdl
let s:l = 6 - ((5 * winheight(0) + 19) / 38)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 6
normal! 0
lcd ~/Documents/coding/Ud-Studios-Assignment/backend
wincmd w
exe 'vert 1resize ' . ((&columns * 79 + 79) / 159)
exe 'vert 2resize ' . ((&columns * 79 + 79) / 159)
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let &winminheight = s:save_winminheight
let &winminwidth = s:save_winminwidth
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
nohlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
