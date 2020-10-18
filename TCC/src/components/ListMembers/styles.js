import {StyleSheet} from 'react-native';
import colors from '../../configs/colors';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
    },
    listMembers:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: 344,
        height: 120,
        marginLeft: 15,
        marginTop: 36,
        backgroundColor: '#fff',
        shadowColor: 'rgba(0,0,0, 0.25)',
        shadowOpacity: 0.8,
        elevation: 6,
        borderRadius: 15
        
    },

    image:{
        width: 72,
        height: 72,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        marginLeft: 16,
    },
    information:{
        flex: 1,
        flexDirection: 'column',
        marginLeft: 30,
        marginBottom: 30
    },

    name:{
        color: '#403F3F',
        fontSize: 18,
        fontWeight: 'bold'
    },
    age:{
        color: '#7B7B7B',
        fontSize: 14,

    }

});

export default styles;