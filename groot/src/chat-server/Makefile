name=$(shell glide name)
parent=$(shell pwd)
grand_grand_parent=$(shell dirname $(shell dirname $(shell pwd)))
GOPATH=$(grand_grand_parent)
GOBIN=$(grand_grand_parent)/bin

init:
	glide init
fetch:
	glide install
	glide up
get:
	glide get $(git)
install:
	go install $(name)
build:
	echo $(GOPATH)
	go build .
run:
	$(GOPATH)/bin/$(name)
test:
	go test -integration

