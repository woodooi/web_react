.sort(
                        (a, b) => (priceSort ? a.price - b.price : 0)
                    ).sort(
                        (a, b) => (volumeSort ? a.tank_volume - b.tank_volume : 0)
                    ).filter((item) => {
                        return item.price >= sliderFilter[0] && item.price <= sliderFilter[1];
                    }
                    ).filter((item) => {
                        return search.toLowerCase() === ''
                        ? item
                        : item.name.toLowerCase().includes(search.toLowerCase())
                    })