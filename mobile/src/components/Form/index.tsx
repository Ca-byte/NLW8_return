import React, { useState} from 'react';
import { theme } from '../../theme';
import { 
    View,
    Text,
    TextInput,
    Image,
    KeyboardAvoidingView,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    Platform
} from 'react-native';
import { ArrowLeft } from 'phosphor-react-native';
import { captureScreen } from 'react-native-view-shot';

import { FeedbackType } from '../../components/Widget';
import { feedbackTypes } from '../../utils/feedbackTypes';
import * as FileSystem from 'expo-file-system';

import { api } from '../libs/api';
import { styles } from './styles';
import { ScreenshotButton } from '../ScreenshotButton';
import { Button } from '../Button';

interface Props {
    feedbackType: FeedbackType;
    onFeedbackCanceled: ()=> void;
    onFeedBackSent: ()=> void;

}
export function Form({feedbackType, onFeedBackSent, onFeedbackCanceled}:Props) {
    const [screenshot, setScreenshot] = useState<string | null>(null);
    const [isSendingFeedback, setIsSendingFeedback] = useState(false);
    const [comment, setcomment] = useState('');

    const feedbackTypeInfo = feedbackTypes[feedbackType];
    

    function handleScreenshot(){
        captureScreen({
            format: 'jpg',
            quality: 0.8
        })
        .then(uri => setScreenshot(uri))
        .catch(error => console.log(error));
    }

    function handleScreeshotRemove(){
        setScreenshot(null);
    }

    async function handleSentFeedback() {
        if(isSendingFeedback) {
            return;
        }
        setIsSendingFeedback(true);
        const screenshotBase64 = screenshot && await FileSystem.readAsStringAsync(screenshot, {encoding: 'base64'});

        try{
            await api.post('/feedbacks', {
                type: feedbackType,
                screenshot: `data:image/png;base64, ${screenshotBase64}`,
                comment
            });
            onFeedBackSent();


        }catch (error) {
            console.log(error);
            setIsSendingFeedback(false);
        }

        
    }
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity
            onPress={onFeedbackCanceled}
            >
                <ArrowLeft
                size={24} 
                weight="bold"
                color={theme.colors.text_secondary}
                />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
                <Image
                source={feedbackTypeInfo.image}
                style={styles.image}
                
                />
                <Text style={styles.titleText}>
                    {feedbackTypeInfo.title}

                </Text>
            </View>

        </View>
        <TextInput 
        multiline
        style={styles.input}
        placeholder='Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo...'
        placeholderTextColor={theme.colors.text_secondary}
        autoCorrect={false}
        onChangeText={setcomment}
        />

        <View style={styles.footer}>
            <ScreenshotButton
            onTakeShot={handleScreenshot}
            onRemoveShot={handleScreeshotRemove}
            screenshot={screenshot}

            />
            <Button
            onPress={handleSentFeedback}
            isLoading={isSendingFeedback} 
            />
        </View>
    </View>
    
  );
}