export const getUniqueValues = (data, type) => {
    let unique = data.map((item) => item[type])
    if (type === 'colors') {
      unique = unique.flat()
    }
  
    return ['all', ...new Set(unique)]
}