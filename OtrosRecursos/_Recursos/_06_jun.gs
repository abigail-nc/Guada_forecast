'reinit'
'sdfopen era5_data/data_stream-oper_stepType-accum.nc' 
'sdfopen era5_data/data_stream-oper_stepType-instant.nc'

'set display color white'
'c'
'set mproj scaled'
'set mpdset hires estados'
'set gxout shaded'
'set grads off'

'set parea 0.5 9.75 0.25 6.75'
*'./colormaps_v2.gs -map Jet -levels 8 36 2'
*'d t2m.2(t=46)-273.15'
*'draw map'


'set gxout shaded'
'./colormaps_v2.gs -map Jet -levels 0 10 1'
'd mag(u10.2(t=1),v10.2(t=1))'
'set gxout vector'
'd skip(u10.2(t=1),5);v10.2(t=1)'
'./xcbar2.gs 10.2 10.43 0.25 6.75 -edge triangle -dir v -line on -fs 2'
'draw map'

vectores()
'printim ./06junio_wind.png x2200 y1700'

function vectores()
'set gxout vector'
len = 0.3
scale = 10
xrit = 7.26
ybot = 4.9
'set arrscl 'len' 'scale
'set arrlab off'
*'d u;v'
rc = arrow(xrit-0.25,ybot+0.2,len,scale)
function arrow(x,y,len,scale)
'set ccolor 1'
'set line 1 1 4'
'draw line 'x-len/2.' 'y' 'x+len/2.' 'y
'draw line 'x+len/2.-0.05' 'y+0.025' 'x+len/2.' 'y
'draw line 'x+len/2.-0.05' 'y-0.025' 'x+len/2.' 'y
'set string 1 c 90'
'set strsiz 0.1'
'draw string 'x' 'y-0.1' 'scale
return
