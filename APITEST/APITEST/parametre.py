
class parmatere:
    DATABASESmongo= {
            'default': {
                'ENGINE': 'djongo',
                'NAME': 'Table',
                'ENFORCE_SCHEMA': False,
                'CLIENT': {
                    'host': 'mongodb://marwen:11061993@mongodb:27017/?retryWrites=true&w=majority'
                }  
            }
    }
    DATABASESLocal= {
            'default': {
                'ENGINE': 'djongo',
                'NAME': 'Table',
                'ENFORCE_SCHEMA': False,
                'CLIENT': {
                    'host': 'mongodb://marwen:11061993@localhost:27017/?retryWrites=true&w=majority'
                }  
            }
    }
    