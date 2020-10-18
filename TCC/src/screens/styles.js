import {StyleSheet} from 'react-native';
import colors from '../configs/colors';

const styles = StyleSheet.create({
    safeArea:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: `${colors.primary}`
    },
    header:{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo:{
        width: 150,
        height: 150
    },
    buttonOPtions:{
        justifyContent: 'center',
        padding: 10,
    },
    card:{
        flex: 1,
        flexDirection: 'column',
        marginTop: 40,
        padding: 10,
        backgroundColor: `${colors.cards}`,
        borderTopRightRadius: 45,
        borderTopLeftRadius: 45
    },
    separetor:{
        width: 100,
        height: 2,
        marginTop: 8,
        backgroundColor: `${colors.primary}`
    },
    viewTitle:{
        marginTop: 60,
        marginLeft: 15
    },
    title:{
        fontSize: 26,
        fontWeight: 'bold'
    }
});

export default styles;