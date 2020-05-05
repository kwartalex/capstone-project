
export function saveEntry(name, data) {
    localStorage.setItem(name, JSON.stringify(data))
  }

export function loadEntry(name) {
    try {
      return JSON.parse(localStorage.getItem(name))
    } catch (error) {
      console.log(error.message)
    }
  }
