import csv
import json

csvfile = open('data.csv', 'rU')
jsonfile = open('data.json', 'w')

fieldnames = ("State", "StateName", "MinWage", "Yearly", "TakeHome", "Food", "Housing", "Transportation", "CostOfLiving", "MoneyRemaining")
reader = csv.DictReader(csvfile, fieldnames, delimiter=',')
final = {};
for row in reader:
    final[row['State']] = row

json.dump(final, jsonfile)
jsonfile.write('\n')




csvfile = open('data-twoparents.csv', 'rU')
jsonfile = open('data-twoparents.json', 'w')

fieldnames = ("State", "StateName", "MinWage", "Yearly", "TakeHome", "Food", "Housing", "Transportation", "CostOfLiving", "MoneyRemaining")
reader = csv.DictReader(csvfile, fieldnames, delimiter=',')
final = {};
for row in reader:
    final[row['State']] = row

json.dump(final, jsonfile)
jsonfile.write('\n')



csvfile = open('data-twoparents-expenses.csv', 'rU')
jsonfile = open('data-twoparents-expenses.json', 'w')

fieldnames = ("State", "StateName", "MinWage", "Yearly", "TakeHome", "Food", "Housing", "Transportation", "Clothing", "Internet", "Phone", "CostOfLiving", "MoneyRemaining")
reader = csv.DictReader(csvfile, fieldnames, delimiter=',')
final = {};
for row in reader:
    final[row['State']] = row

json.dump(final, jsonfile)
jsonfile.write('\n')
