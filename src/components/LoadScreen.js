import React, { Component } from 'react'
import Backdrop from 'material-ui/Modal/Backdrop'
import { CircularProgress } from 'material-ui/Progress'
import jsf from 'json-schema-faker'
import faker from 'faker'

class LoadScreen extends Component {
  componentDidMount() {
    console.log('printing schema..')
    const schema = {
      agentDnsDomain: {
        type: 'string',
        faker: 'internet.domainName'
      },
      agentNtDomain: {
        type: 'string',
        faker: 'internet.domainName'
      },
      agentTranslatedAddress: {
        type: 'string',
        faker: 'internet.ip'
      },
      agentTranslatedZoneExternalID: {
        type: 'string',
        faker: 'random.uuid'
      },
      agentTranslatedZoneURI: {
        type: 'string',
        faker: 'internet.url'
      },
      agentZoneExternalID: {
        type: 'string',
        faker: 'random.uuid'
      },
      agentZoneURI: {
        type: 'string',
        faker: 'internet.url'
      },
      agentAddress: {
        type: 'string',
        faker: 'internet.ip'
      },
      agentHostName: {
        type: 'string',
        faker: 'internet.domainWord'
      },
      agentId: {
        type: 'string',
        faker: 'random.uuid'
      },
      agentMacAddress: {
        type: 'string',
        faker: 'internet.mac'
      },
      agentReceiptTime: {
        type: 'string',
        format: 'date-time'
      },
      agentType: {
        type: 'string',
        faker: 'hacker.noun'
      },
      agentTimeZone: {
        type: 'string',
        faker: 'random.number'
      },
      agentVersion: {
        type: 'integer',
        minimum: '1',
        maximum: '10'
      },
      deviceEventCategory: {
        type: 'string',
        chance: {
          pickone: [
            [
              'category-1',
              'category-2',
              'category-3'
            ]
          ]
        }
      },
      customerExternalID: {
        type: 'string',
        faker: {
          fake: 'C-{{random.number}}'
        }
      },
      customerURI: {
        type: 'string',
        faker: 'internet.url'
      },
      destinationTranslatedZoneExternalID: {
        type: 'integer',
        minimum: '5000',
        maximum: '7000'
      },
      destinationTranslatedZoneURI: {
        type: 'string',
        faker: 'internet.url'
      },
      destinationZoneExternalID: {
        type: 'integer',
        minimum: '5000',
        maximum: '7000'
      },
      destinationZoneURI: {
        type: 'string',
        faker: 'internet.url'
      },
      deviceTranslatedZoneExternalID: {
        type: 'integer',
        minimum: '5000',
        maximum: '7000'
      },
      deeviceTranslatedZoneURI: {
        type: 'string',
        faker: 'internet.url'
      },
      deviceZoneExternalID: {
        type: 'integer',
        minimum: '5000',
        maximum: '7000'
      },
      deviceZoneURI: {
        type: 'string',
        faker: 'internet.url'
      },
      destinationGeoLatitude: {
        type: 'string',
        faker: 'address.latitude'
      },
      destinationGeoLongitude: {
        type: 'string',
        faker: 'address.longitude'
      },
      eventId: {
        type: 'string',
        faker: 'random.uuid'
      },
      rawEvent: 'this_is_the_raw_event_placeholder',
      sourceGeoLatitude: {
        type: 'string',
        faker: 'address.latitude'
      },
      sourceGeoLongitude: {
        type: 'string',
        faker: 'address.longitude'
      },
      sourceTranslatedZoneExternalID: {
        type: 'integer',
        minimum: '1000',
        maximum: '3000'
      },
      sourceTranslatedZoneURI: {
        type: 'string',
        faker: 'internet.url'
      },
      sourceZoneExternalID: {
        type: 'integer',
        minimum: '5000',
        maximum: '7000'
      },
      sourceZoneURI: {
        type: 'string',
        faker: 'internet.url'
      }
    }
    jsf.resolve(schema).then((sample) => {
      console.log(sample)
    })
    console.log(faker.internet.ip())
  }

  render() {
    return (
      <div>
        <CircularProgress color="primary" className="loading" size={200} />
        <Backdrop open style={{ zIndex: 1502 }} />
      </div>
    )
  }
}
export default LoadScreen
