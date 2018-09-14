PAGES := dist/index.html dist/facebook.html dist/twitter.html dist/instagram.html dist/youtube.html
.PHONY: $(PAGES)

all: $(PAGES)

dist/index.html: data/brightcove.json
	loopit -data $< -out $@ -shim templates/*.tmpl

dist/facebook.html: data/facebook.json
	loopit -data $< -out $@ -shim templates/*.tmpl

dist/twitter.html: data/twitter.json
	loopit -data $< -out $@ -shim templates/*.tmpl

dist/instagram.html: data/instagram.json
	loopit -data $< -out $@ -shim templates/*.tmpl

dist/youtube.html: data/youtube.json
	loopit -data $< -out $@ -shim templates/*.tmpl

#
# Aggregates
#

data/brightcove.json: $(patsubst %,data/%.json, 216625110 latest 217387680 politics)
	jq -s "{story: .[0], latest: .[1], readNext: .[2], section: .[3]}" $^ > $@

data/facebook.json: $(patsubst %,data/%.json, 217871140 latest 217919770 politics)
	jq -s "{story: .[0], latest: .[1], readNext: .[2], section: .[3]}" $^ > $@

data/twitter.json: $(patsubst %,data/%.json, 217919770 latest 217896325 sports)
	jq -s "{story: .[0], latest: .[1], readNext: .[2], section: .[3]}" $^ > $@

data/instagram.json: $(patsubst %,data/%.json, 217896325 latest 216625110 sports)
	jq -s "{story: .[0], latest: .[1], readNext: .[2], section: .[3]}" $^ > $@

data/youtube.json: $(patsubst %,data/%.json, 217919330 latest 216625110 politics)
	jq -s "{story: .[0], latest: .[1], readNext: .[2], section: .[3]}" $^ > $@
	
#
# Feeds
#

feeds: $(patsubst %,data/%.json, 216625110 217387680 140757263 latest politics)

data/216625110.json: # Related Example
	mapi -lead -section -inline -related "/v1/stories/216625110?publication=kansascity" > $@

data/217387680.json:
	mapi -lead -section "/v1/stories/217387680?publication=kansascity" > $@

data/140757263.json: # Facebook (in the story body)
	mapi -lead -section -inline -related "/v1/stories/140757263?publication=kansascity" > $@

data/217871140.json: # Facebook (inline embed)
	mapi -lead -section -inline -related "/v1/stories/217871140?publication=kansas" > $@

data/217919770.json: # Twitter 
	mapi -lead -section -inline -related "/v1/stories/217919770?publication=kansascity" > $@

data/217896325.json: # Instagram 
	mapi -lead -section -inline -related "/v1/stories/217896325?publication=miamiherald" > $@

data/217919330.json: # Youtube
	mapi -lead -section -inline -related "/v1/stories/217919330?publication=fresnobee" > $@

data/latest.json:
	mapi -section "/v1/search/?content_type=story&section_id=2415&published_to=kansascity&sort=published_date" > $@

data/politics.json:
	mapi -lead -section "/v1/search/?content_type=story&section_id=2595&published_to=kansascity&sort=published_date" > $@

data/sports.json:
	mapi -lead -section "/v1/search/?content_type=story&section_id=2662&published_to=kansascity&sort=published_date" > $@

#
# Cleanup and publish
#

clean:
	rm -f data/*
	rm -rf dist/*.html

public:
	cp -r dist/* ../static/amp/designs/
	cd .. && hugo
