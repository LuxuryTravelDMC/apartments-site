import math,re
# Floor plan from Figma (frame "Phoenix Apartment"), coordinates in Figma px.
SC=0.135; X0,Y0=491,233
c,s=math.cos(math.radians(30)),math.sin(math.radians(30))
def iso(fx,fy,z=0):
    x=(fx-X0)*SC; y=(fy-Y0)*SC
    return ((x-y)*c, (x+y)*s - z)
paths=[]  # (group, svg)
def poly(pts): return 'M'+' L'.join(f'{a:.1f} {b:.1f}' for a,b in pts)+' Z'
def P(pts): return poly([iso(*p) for p in pts])
def box(x0,y0,x1,y1,h,z0=0,cls='bp__fill'):
    f=[P([(x1,y0,z0),(x1,y1,z0),(x1,y1,z0+h),(x1,y0,z0+h)]),
       P([(x0,y1,z0),(x1,y1,z0),(x1,y1,z0+h),(x0,y1,z0+h)]),
       P([(x0,y0,z0+h),(x1,y0,z0+h),(x1,y1,z0+h),(x0,y1,z0+h)])]
    return ''.join(f'<path class="{cls}" d="{d}"/>' for d in f)
def cyl(cx,cy,r,h,z0=0):
    top=[iso(cx+r*math.cos(t),cy+r*math.sin(t),z0+h) for t in [i*math.pi/20 for i in range(40)]]
    return f'<path d="{poly([iso(cx,cy,z0+h-2),iso(cx,cy,0)][:2])}"/>'.replace(' Z','')+f'<path class="bp__fill" d="{poly(top)}"/>'
def wall(cls,pts): return f'<path class="{cls}" d="{P(pts)}"/>'
H,IH=82,22
out=[]
zones={0:[(1488,421),(2470,421),(2470,1109),(1488,1109)],
       1:[(679,1109),(1773,1109),(1773,1679),(1488,1679),(1488,1380),(679,1380)],
       2:[(679,421),(1488,421),(1488,1109),(679,1109)],
       3:[(1773,1109),(2470,1109),(2470,1489),(1773,1489)]}
for k,v in zones.items(): out.append(f'<path class="bp__zone" data-zone="{k}" d="{P([(x,y,0) for x,y in v])}"/>')
# balcony (L shape) + low railing
balc=[(491,233),(2470,233),(2470,421),(679,421),(679,1380),(491,1380)]
grid=''.join(f'<path class="bp__grid" d="{P([(gx,233,0),(gx,421,0)])}"/>' for gx in range(560,2470,70))+''.join(f'<path class="bp__grid" d="{P([(491,gy,0),(679,gy,0)])}"/>' for gy in range(300,1380,70))
sh=f'<path class="bp__balc" d="{P([(x,y,0) for x,y in balc])}"/>'+grid
sh+=wall('bp__wall',[(491,233,0),(2470,233,0),(2470,233,18),(491,233,18)])
sh+=wall('bp__wall',[(491,233,0),(491,1380,0),(491,1380,18),(491,233,18)])
sh+=box(2273,262,2460,403,26)  # washing machine (balcony)
# apartment floor outline + floor lines
floor=[(679,421),(2470,421),(2470,1489),(1773,1489),(1773,1679),(1488,1679),(1488,1380),(679,1380)]
sh+=f'<path d="{P([(x,y,0) for x,y in floor])}"/>'
# back walls (outline), with balcony doors
sh+=wall('bp__back',[(679,421,0),(2470,421,0),(2470,421,H),(679,421,H)])
sh+=wall('bp__back',[(679,421,0),(679,1380,0),(679,1380,H),(679,421,H)])
sh+=wall('',[(1721,421,0),(2045,421,0),(2045,421,66),(1721,421,66)])
sh+=wall('',[(679,695,0),(679,1020,0),(679,1020,66),(679,695,66)])
out.append(f'<g class="bp__shell">{sh}</g>')
def group(z,items): return f'<g class="bp__z" data-zone="{z}">'+''.join(items)+'</g>'
# kitchen (2)
k=[box(681,424,1486,577,24), box(691,436,869,571,60), box(1001,455,1213,560,2,24), box(1288,439,1456,560,2,24)]
cx,cy,r=1221,852,150
for dx,dy in [(0,-205),(-205,0)]: k.append(box(cx+dx-50,cy+dy-50,cx+dx+50,cy+dy+50,12))
k.append(cyl(cx,cy,r,20))
for dx,dy in [(205,0),(0,205)]: k.append(box(cx+dx-50,cy+dy-50,cx+dx+50,cy+dy+50,12))
out.append(group(2,k))
out.append('<g class="bp__shell">'+wall('bp__wall',[(1488,421,0),(1488,1109,0),(1488,1109,IH),(1488,421,IH)])+'</g>')
# living room (1)
l=[box(682,1176,699,1337,22,14), cyl(775,1115,62,10),
   box(780,1197,1424,1379,11), box(780,1320,1424,1379,24), box(780,1197,850,1379,17), box(1354,1197,1424,1379,17),
   box(1492,1470,1531,1632,28)]
l.append(wall('',[(1773,1517,0),(1773,1665,0),(1773,1665,64),(1773,1517,64)]))
out.append(group(1,l))
# bedroom (0)
b=[box(1490,423,1667,979,66), box(1821,536,2420,976,14), box(2420,536,2470,976,32),
   box(2330,566,2410,746,20), box(2330,766,2410,946,20)]
out.append(group(0,b))
out.append('<g class="bp__shell">'+wall('bp__wall',[(1488,1109,0),(2470,1109,0),(2470,1109,IH),(1488,1109,IH)])+wall('bp__wall',[(1773,1109,0),(1773,1489,0),(1773,1489,IH),(1773,1109,IH)])+'</g>')
# bathroom (3)
t=[box(1774,1367,2094,1487,24), box(2320,1365,2467,1477,12), box(2440,1365,2467,1477,24), box(2172,1112,2467,1353,52,0,'bp__glass')]
out.append(group(3,t))
svg=''.join(out)
nums=[float(n) for n in re.findall(r'-?\d+\.\d',svg)]
xs=nums[0::2]; ys=nums[1::2]
pad=10; mnx,mxx,mny,mxy=min(xs)-pad,max(xs)+pad,min(ys)-pad,max(ys)+pad
vb=f'{mnx:.0f} {mny:.0f} {mxx-mnx:.0f} {mxy-mny:.0f}'
full=f'<svg viewBox="{vb}" class="bp__svg" aria-hidden="true">{svg}</svg>'
p='src/components/Blueprint.astro';tx=open(p).read()
tx=re.sub(r'<svg viewBox="[^"]*" class="bp__svg".*?</svg>',full,tx,flags=re.S)
if '.bp__balc' not in tx:
    tx=tx.replace("  .bp__svg .bp__glass { fill: rgb(255 255 255 / .06); }","  .bp__svg .bp__glass { fill: rgb(255 255 255 / .06); }\n  .bp__svg .bp__balc { fill: rgb(255 255 255 / .05); stroke: rgb(255 255 255 / .45); stroke-dasharray: 3 3; }\n  .bp__svg .bp__back { fill: none; stroke: rgb(255 255 255 / .85); }")
tx=tx.replace("// 5 seconds by itself, or, with sync, together with the rotating review card\n// (which sends a \"collage:tick\" event). An illustration, not an exact plan.","// 5 seconds by itself, or, with sync, together with the rotating review card\n// (which sends a \"collage:tick\" event). Drawn from the owner's floor plan in\n// Figma (frame \"Phoenix Apartment\"); regenerate with scripts/blueprint.py.")
open(p,'w').write(tx); print(vb)
