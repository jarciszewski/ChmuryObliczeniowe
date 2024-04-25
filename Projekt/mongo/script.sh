mongoimport --db auth_react --collection golds --file gold.csv --type=csv --fields "date,price"
mongoimport --db auth_react --collection wars --file wars.csv --type=csv --fields "name,start,end"
#mongoimport --db auth_react --collection golds --file gold.json --type=json --jsonArray
#mongoimport --db auth_react --collection wars --file wars.json --type=json --jsonArray