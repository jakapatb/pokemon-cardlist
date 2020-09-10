# Middle Frontend interview

สร้าง Dota2 team builder

สามารถเลือก Hero 5 ตัว โดยไม่สามารถเลือกซ้ำได้

สามารถ Filter ตาม attributes และ Attack type ได้

Attributes (Str,Agi,Int)

Attack type (Melee, Ranged)

โดยดึงข้อมูล จาก ไฟล์ ./database.json
และรูปภาพมีใน public/

hero-slug-name คือ ให้เอา localized_name มาแปลงเป็น lower case และ เปลี่ยนให้ space " " เป็น "\_"

## image 3D

https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/{hero-slug-name}_full.png

### example image url

https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/phantom_assassin_full.png

## image 2D

https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/{hero-slug-name}_vert.jpg

### example image url

https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/phantom_assassin_vert.jpg

## Color

Background-1 #2f363d

Background-2 #1b1e21

Font color #FEFEFE

Gradient color #c31432, #240b36
