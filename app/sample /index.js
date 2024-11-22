import React from 'react'
import Sample from '../../component/Sample'
import { withTranslation } from '../../i18n'
import PropTypes from 'prop-types'

const SamplePage = ({t}) => {
    return(
        <Sample/>
    )
}

SamplePage.getInitialProps = async () => ({
    namespacesRequired: ['sample'],
})

SamplePage.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('sample')(SamplePage)