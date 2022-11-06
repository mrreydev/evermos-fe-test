export default {
  methods: {
    parseLinkHeader (linkHeader) {
      const linkHeadersArray = linkHeader.split( ", " ).map( header => header.split( "; " ) )
      const linkHeadersMap = linkHeadersArray.map( header => {
          const thisHeaderRel = header[1].replace( /"/g, "" ).replace( "rel=", "" )
          const thisHeaderUrl = header[0].slice( 1, -1 )
          return [ thisHeaderRel, thisHeaderUrl ]
      } )
      return Object.fromEntries( linkHeadersMap )
    },
    formatRupiah (value) {
      return new Intl.NumberFormat('id-ID',
        { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
      ).format(value)
    },
    setQuery(queries = {}) {
      if (queries && Object.keys(queries).length) {
        this.$router.push({
          query: {
            ...this.$route.query,
            ...queries
          }
        })
      } else {
        this.$router.push({
          query: null
        })
      }
    }
  }
}
