main () {
  if [ $# -eq 0 ] # The $# variable is bound to the number of arguments passed to the function
  then
    echo "One for you, one for me."
  else
    echo "One for $1, one for me."
  fi

  return 0
}

main "$@"