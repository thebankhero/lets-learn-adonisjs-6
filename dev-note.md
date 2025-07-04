# TailwindCSS
npm i -D tailwindcss@3 autoprefixer
npx tailwindcss init -p

# MD
npm i @dimerapp/markdown

# MVC
node ace make:service movies
node ace make:controller movies index show 

# Redis
npm i @adonisjs/redis
node ace configure @adonisjs/redis

docker-compose exec redis redis-cli
AUTH lets-learn-adonis-dev ycE9iCYW8p6600J9KxspZRlE63q6JCO6

SELECT 1
KEYS *

docker-compose exec redis redis-cli -n 1 KEYS '*'

KEYS *
DBSIZE
GET your_key_name

## Redis Flush
FLUSHDB

## รีโหลด ACL 
docker-compose exec redis redis-cli ACL LOAD
docker-compose exec redis redis-cli ACL LIST

node ace make:controller redis

# Global Data Flow
node ace make:preload globals

# Form Spoofing
allowMethodSpoofing

# edge-iconify
https://edgejs.dev/docs/edge-iconify
https://icon-sets.iconify.design/

npm i edge-iconify
npm i @iconify-json/ph

# Database (PostgreSQL)
node ace configure @adonisjs/lucid

# Migration
node ace make:migration table_names
node ace migration:status
node ace migration:run
node ace make:model roles
node ace make:migration cast_movies_add_sort_order --alter
node ace migration:refresh --seed

# REPL
node ace repl
.ls
loadModels()
await models.role.all()
await models.role.create({ name: 'User' })

# Seeder
node ace make:seeder start
node ace db:seed

# Factory
node ace make:factory cinest
node ace make:seeder fake
node ace db:seed --files=database/seeders/fake_seeder.ts

# Model (Migration , Controller , Factory)
node ace make:model profile -mcf

# Validator
node ace make:validator auth

# Rules
node ace make:preload rules/unique

# Middleware
node ace make:middleware silent_auth

# Remember Me Token
node ace make:migration remember_me_tokens
