package handler
 
import (
  "fmt"
  "net/http"
)
 
func Handler1(w http.ResponseWriter, r *http.Request) {
  fmt.Fprintf(w, "<h1>Go API! #Handler 1#</h1>")
}

func Handler2(w http.ResponseWriter, r *http.Request) {
  fmt.Fprintf(w, "<h1>Go API! #Handler 2#</h1>")
}
