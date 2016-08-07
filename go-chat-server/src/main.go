package main

import (
	"io"
	//"net/http"

	"golang.org/x/net/websocket"
	"net/http"
)


func main() {
	http.Handle("/", websocket.Handler(echoHandler))
	//http.Handle("/", http.FileServer(http.Dir(".")))
	//err := http.ListenAndServe(":8080", nil)
	//if err != nil {
	//	panic("ListenAndServe: " + err.Error())
	//}
}
