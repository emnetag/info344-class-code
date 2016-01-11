-- file path must be a full path to your CSV file
load data local infile '~/info344-class-code/php-forms/data/zip_code_database.csv'
into table zips
fields terminated by ','
optionally enclosed by '"'
ignore 1 lines;
